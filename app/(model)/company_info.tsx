import { Schedule } from '@/app/(model)/schedule';

export interface CompanyInfo {
  companyName: string;
  memo: string;
  status: number;
  nextSchedule: Schedule;
}

export interface CreateCompanyRequestParam {
  companyName: string;
  mypageURL: string;
  memo: string;
  status: number;
}

// 一覧ページ
export interface CompanySummaryResponseParam {
  companyName: string;
  memo: string;
  status: number;
  nextSchedule: Schedule;
}

export const status2string = [
  '受付開始前',
  'ES作成中',
  '面接実施前',
  '連絡待ち',
  'Webテスト受験前',
];
export const status2color = ['#dcdcdc', '#b7ffb7', '#ffe0c1', '#ccccff', '#ffd1e8'];
