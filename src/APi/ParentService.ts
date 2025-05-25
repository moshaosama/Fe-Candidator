abstract class ParentService {
  protected url;
  constructor() {
    this.url = "http://localhost:8000";
  }

  abstract getAllData(_?: any, thunkAPI?: any): any;
  abstract createNewData(data: any, thunkAPI: any): any;
}

export default ParentService;
