abstract class ParentService {
  url;
  constructor(url: string) {
    this.url = url;
  }

  abstract getAllData(): void;
  abstract createNewData(data: any): void;
}

export default ParentService;
