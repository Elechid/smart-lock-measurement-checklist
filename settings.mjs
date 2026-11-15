import { lock } from './tools.mjs';

export const tools = {
  lock: {
    title: ['Smart lock door measurement checklist','智能門鎖門身量度清單'],
    fields: [["Door thickness across the slab faces (mm)", "量門扇內外兩面之間的厚度（毫米）", null, 1], ["Backset from door edge to handle spindle centre (mm)", "由門邊量至手柄軸中心（毫米）", null, 1], ["Handle spindle to cylinder centre (mm)", "量手柄軸中心至鎖膽中心（毫米）", null, 1], ["Visible faceplate width on door edge (mm)", "量門邊鎖體面板闊度（毫米）", null, 1], ["Visible faceplate length on door edge (mm)", "量門邊鎖體面板長度（毫米）", null, 1], ["Clear frame space at lock height (mm)", "在鎖位高度量門框可用空間（毫米）", null, 0], ["Door-to-frame gap with door closed (mm)", "關門後量門扇至門框縫隙（毫米）", null, 0], ["Viewed from outside: opens in or out, hinges left or right", "從門外看：向內或向外開、鉸鏈在左或右", ""]],
    labels: [],
    guide: "smart-door-lock-hong-kong-guide",
    intro: ["Fill the measurements you have and copy the checklist. Blank fields are marked “Not measured”. Add photos of both door faces, the door edge and the frame at lock height.", "填已量的數字，再複製清單。空白項會標為「未量」。請附上門內、門外、門邊及鎖位高度的門框相片。"],
    calculate: lock,
    note: ["Ask the installer to confirm lock compatibility and installation before ordering.", "落單前請由安裝師傅確認鎖體兼容及安裝要求。"],
  },
};
