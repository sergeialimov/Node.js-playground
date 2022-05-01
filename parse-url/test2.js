const wantedCriminals = [
  "rob-debob",
  "jeff-bizos",
  "de-coder", 
  "intu-ishun",
];

class FBIServer {
  constructor (_criminalData, _baseUrl) {
      this.baseUrl = _baseUrl;
      this.criminalData = _criminalData;
  }

  async getCriminalRecord (criminalName) {
      return await this.criminalData.criminalRecord(criminalName);
  }


  // <base_url>: Looks like this: https://<>.<>/
  // possible urls to handle: 
  // <base_url>/criminal_data/<criminal_id>: Expected output: value of getCriminalRecord as object
  //                                         If no criminal exists, return "no criminal found" 
  // <base_url>/does_criminal_exist/<criminal_id>: Expected output: boolean indicating wether the criminal exists
  // <base_url>/<anything else>: Expected output: "404 not found"
  async handleWebRequest (urlLocal) {
      // only change after
      // INSERT CODE HERE
      // I need to put something here
      const url = require('url');
      // <base_url>/does_criminal_exist/<criminal_id></criminal_id>
      const path = url.parse(urlLocal).pathname; // <criminal_id></criminal_id>
      console.log(path)
      /// I have the `url` param

      // only change before
  }
};