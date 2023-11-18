import { News } from '@/app/(model)/news';
import { AxiosResponse } from 'axios';
import axios from '@/app/(util)/axios';
import { CompanySummaryResponseParam } from '@/app/(model)/company_info';
import { NewsPageContent } from './content';
import axiosOrigin from 'axios';

const convert = require('xml-js');

export default async function NewsPage() {
  const companyList = await axios
    .get('/company?userID=1')
    .then((res: AxiosResponse<CompanySummaryResponseParam[]>) => {
      const { data, status } = res;
      return data;
    });

  const companyNameList = companyList.map((elm) => elm.companyName);
  const basicList = ['就活', '25卒'];
  const tabList = basicList.concat(companyNameList);

  var newsList: News[][] = [];
  for (var i = 0; i < tabList.length; i++) {
    const tempList: News[] = await axiosOrigin
      .get(
        'https://news.google.com/rss/search?hl=ja&gl=JP&q=' + encodeURI(tabList[i]) + '&ceid=JP:ja'
      )
      .then((res) => {
        const dataJsonText = convert.xml2json(res.data, { compact: true, spaces: 4 });
        const json = JSON.parse(dataJsonText);

        var tempList: News[] = [];
        for (var i = 0; i < json.rss.channel.item.length; i++) {
          tempList.push({
            imageUrl: undefined,
            title: json.rss.channel.item[i].title._text,
            newsUrl: json.rss.channel.item[i].link._text,
          });
        }

        return tempList;
      });
    newsList.push(tempList);
  }

  return (
    <>
      <NewsPageContent companyList={tabList} newsList={newsList} />
    </>
  );
}
