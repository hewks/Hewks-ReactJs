/**
 * Envio de datos al backend de hewks
 */

class toback {
  constructor() {
    this.info = {
      ip: "",
      appName: "",
      appCodeName: "",
      appVersion: "",
      language: "",
      platform: "",
      userAgent: "",
      date: "",
      load: ""
    };

    this.date = {
      init: new Date().getTime(),
      start: new Date()
    };

    window.addEventListener("DOMContentLoaded", () => {
      this.date.end = new Date().getTime();
      this.info.load = this.date.end - this.date.start;
      this.getInfo();
    });
  }

  async getIp() {
    const req = await fetch("https://api.ipify.org?format=json");
    const res = await req.json();
    this.info.ip = res.ip;
  }

  async getInfo() {
    await this.getIp();
    this.info.appName = navigator.appName;
    this.info.appCodeName = navigator.appCodeName;
    this.info.appVersion = navigator.appVersion;
    this.info.language = navigator.language;
    this.info.platform = navigator.platform;
    this.info.userAgent = navigator.userAgent;
    this.info.date = new Date();
    this.sendInfo();
  }

  async sendInfo() {
    await fetch("http://192.168.0.20:4500/fronts", {
      method: "POST",
      body: JSON.stringify(this.info),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

new toback();
