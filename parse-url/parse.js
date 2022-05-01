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
  async handleWebRequest (url) {
      // only change after
      // INSERT CODE HERE
      
      
      const endPoint = url.split(this.baseUrl)[1].split('/')[0];
      
      if (endPoint !== 'criminal_data' || endPoint !== 'does_criminal_exist') {
          return "404 not found";
      }
      
      
      
      
          return "no criminal found" 
      

      // only change before
  }
};