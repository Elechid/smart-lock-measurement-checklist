import { lock } from './tools.mjs';

export const tools = {
  lock: {
    title: ['Smart lock door measurement checklist','智能門鎖門身量度清單'],
    fields: [
      ['Door thickness (mm)','門厚（毫米）',45,1],
      ['Backset from edge to spindle centre (mm)','門邊至手柄軸中心（毫米）',60,1],
      ['Handle-to-cylinder centre spacing (mm)','手柄軸至鎖膽中心（毫米）',72,1],
      ['Existing faceplate width (mm)','現有鎖體面板闊（毫米）',30,1],
      ['Existing faceplate length (mm)','現有鎖體面板長（毫米）',120,1],
      ['Frame clearance at lock (mm)','鎖位門框空間（毫米）',22,0],
      ['Door-to-frame gap (mm)','門扇與門框縫隙（毫米）',3,0],
      ['Opening direction and hinge side, viewed from outside','從門外看開門方向及鉸鏈位置',''],
    ],
    labels: [],
    calculate: lock,
    note: ['Replace every example value with your actual measurement. Send the list and photos of both door faces and the door edge to the installer. They should confirm fit, lock body and installation requirements before purchase.', '請把每個示例值換成實際量度值，連同門內、門外及門邊相片交給安裝師傅。買之前由師傅確認兼容性、鎖體和安裝要求。'],
  },
};
