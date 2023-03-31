/*
 * @Date: 2023-03-31 15:49:41
 * @LastEditors: lilith.wang lilith.wang@wayz.ai
 */
export default class Viewer {
  [x: string]: any;
  constructor(container: any, opt?:any) {
    this.initViewer(container)
  }

  private initViewer(container:HTMLElement) {
    this.viewer = new Cesium.Viewer(container, {
      navigation: false,
      infoBox: false,
      selectionIndicator: false
    })
    this.viewer._cesiumWidget._creditContainer.style.display = "none"
    return this.viewer
  }
}
