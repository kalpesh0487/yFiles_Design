import { GraphItemTypes, GraphViewerInputMode, IEdge, INode, Point } from "@yfiles/yfiles";
import switches from '../assets/switch-2.jpg';
import unknownDevice from '../assets/unknown-device.svg';
import fatSwitch from '../assets/fat-switch.jpg';
import backHaul from '../assets/Internet Cloud.png';
import Internet from '../assets/Internet Cloud (1).png';
import WAN from '../assets/Internet Cloud (2).png';
import fireWall from '../assets/firewallImage.png';
import loadBalancer from '../assets/load Balancer 2.jpg';
import { DeviceType } from "../types/types";

export function initializeToolTips(graphInputMode: GraphViewerInputMode): void {
    const toolTipItems = GraphItemTypes.NODE | GraphItemTypes.EDGE;
  
    graphInputMode.toolTipItems = toolTipItems;
  
    graphInputMode.addEventListener('query-item-tool-tip', (evt) => {
      if (evt.item) {
        const item = evt.item as INode | IEdge;
        if (item instanceof IEdge && item.tag && item.tag.load !== undefined) {
          evt.toolTip = `<div class="tooltip">Load: ${item.tag.load}%</div>`;
        } else if (item instanceof INode && item.tag && item.tag.data) {
          const { label, ip, type } = item.tag.data;
          let imgSrc;
          switch(type){
            case DeviceType.FAT_SWITCH:
              imgSrc = fatSwitch;
              break;
            case DeviceType.UNKNOWN:
              imgSrc = unknownDevice;
              break;
            case DeviceType.SWITCH:
              imgSrc = switches;
              break;
            case DeviceType.BACKHAUL:
              imgSrc = backHaul;
              break;
            case DeviceType.WAN:
              imgSrc = WAN;
              break;
            case DeviceType.INTERNET:
              imgSrc = Internet;
              break;
            case DeviceType.FIREWALL:
              imgSrc = fireWall;
              break;
            case DeviceType.LOAD_BALANCER:
              imgSrc = loadBalancer;
              break;
            default:
              imgSrc = '';
          }
          evt.toolTip = `
            <div class="tooltip">
              <img src="${imgSrc}" alt="Node Icon" class="tooltip-img" />
              <table class="tooltip-table">
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>${label}</td>
                </tr>
                <tr>
                  <td>IP</td>
                  <td>${ip}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>${type}</td>
                </tr>
              </table>
            </div>
          `;
        }
      }
    });
  
    graphInputMode.toolTipInputMode.toolTipLocationOffset = new Point(2, 14);
    graphInputMode.toolTipInputMode.duration = '10s';
    graphInputMode.toolTipInputMode.delay = '0.3s';
}