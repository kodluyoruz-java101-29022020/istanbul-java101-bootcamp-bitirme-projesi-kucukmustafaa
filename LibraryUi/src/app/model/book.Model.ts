

export class BookModel {
  // @ts-ignore
  constructor(public id: number,
              public name: string,
              public iSBN: string,
              public description: string,
              public category: string){
    this.id = id;
    this.name = name;
    this.iSBN = iSBN;
    this.description = description;
    this.category = category ;

  }

}
