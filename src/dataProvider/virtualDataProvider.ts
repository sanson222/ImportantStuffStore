export type Info = {
    title: string,
    content: string,
    demoImage: string,
    dataset: Array<number>,
}

export type EntityData = {
  _id: number,
  url: string,
  imageUrl: string,
  desc: string,
  info: Info,
};

const virtualDB: Array<EntityData> = [];

export default class VirtualDataProvider {

    static getAll() {
        return virtualDB;
    }

    static setData(data: EntityData) {
        data._id = virtualDB.length;
        virtualDB.push(data);
    }

    static deleteData(id: number) {
        delete virtualDB[id];
    }

}
