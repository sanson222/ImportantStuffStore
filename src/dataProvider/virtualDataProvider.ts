export class EntityData {
    public _id: number;
    public url: string;
    public imageUrl: string;
    public desc: string;
    public title: string = "";
    public content: string = "";
    public demoImage: string = "";
    public dataset: Array<number> = [0, 0, 0];

    constructor({_id = -1, url = "", imageUrl = "", desc = "", title="", content = "", demoImage = "", dataset = [0,0,0]} = {}) {
        this._id = _id;
        this.url = url;
        this.imageUrl = imageUrl;
        this.desc = desc;
        this.title = title;
        this.content = content;
        this.demoImage = demoImage;
        this.dataset = dataset;
    }

    public toPlainObject() {
        let {_id, url, imageUrl, desc, title, content, demoImage, dataset} = this;
        return {
            _id, url, imageUrl, desc, title, content, demoImage, dataset
        }
    }
}

const sampleData = new EntityData();

sampleData.url = "https://es.wikipedia.org/wiki/Neon_Genesis_Evangelion";
sampleData.imageUrl = "https://static.giantbomb.com/uploads/original/9/99864/2406919-_asuka_subs_neon_genesis_evangelion_remastered_08___asuka_strikes__dvd_704x480_x264_aac_ogg_.mkv_snapshot_21.51__2013.01.03_08.30.09_.png";
sampleData.desc = "Neon Genesis Evangelion";
sampleData.title = "Neon Genesis Evangelion";
sampleData.content = "Neon Genesis Evangelion (新世紀エヴァンゲリオン Shin Seiki Evangerion?) o conocida simplemente como Evangelion4​ o Eva,5​6​ es una serie de anime creada por el estudio Gainax7​ y dirigida por Hideaki Anno.8​n. 1​ La historia de la obra se da lugar en un mundo futurista en el que una organización paramilitar llamada NERV protege a la humanidad de los ataques de seres de origen y naturaleza desconocidos, los «ángeles», utilizando para ello mechas humanoides llamados EVA. A medida que avanza la trama, esta se vuelve paulatinamente más confusa y psicológica, en donde las personalidades de los personajes se hacen cada vez más inestables y su desarrollo se torna fundamental.9​ Hideaki Anno, el director y guionista, ha expresado que el desarrollo de la serie estuvo inspirado en su propia experiencia,10​11​n. 2​ en virtud de la cual los personajes muestran una amplia gama de sus afecciones emocionales y de su personalidad.12​\n" +
    "\n" +
    "El anime cuenta con veintiséis episodios que fueron transmitidos por primera vez entre octubre de 1995 y marzo de 1996. Debido a la fama obtenida, pronto se fueron creando diversos spin-offs, entre los que se incluyen series de manga, películas y videojuegos que complementan u ofrecen una realidad alternativa de la historia. A pesar de que el anime constituye la obra original, el manga creado por Yoshiyuki Sadamoto se comenzó a publicar anterior al estreno de la animación para aumentar el interés del público. Sadamoto afirma que el manga es su propia interpretación de Evangelion, mientras que el anime es la interpretación de Anno.\n" +
    "\n" +
    "Esta serie ha sido clasificada en los géneros ciencia ficción, mecha y distopía, conteniendo diversos elementos de filosofía, psicología y religión, con marcadas influencias abrahámicas.n. 3​ Además, sus características técnicas y temáticas, así como la complejidad y simbolismo de su historia, han hecho que esta producción sea considerada como uno de los mejores ejemplos del género del realismo épico. También ha recibido algunos de los mayores premios de animación.13​14​15​ Por todo ello, Evangelion es considerada por muchos como una de las producciones más grandes del anime.10​16​17​";
sampleData.demoImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PhbkjX5R7Ms2NorvVf6xglEvQmN7YkxzyyIbB6ZUwWJXEOEL";
sampleData.dataset = [0, 0, 0];

const virtualDB: Array<EntityData> = [];

export default class VirtualDataProvider {

    static getAll() {
        return virtualDB;
    }

    static setData(data: EntityData) {
        if (data._id < 0) {
            data._id = virtualDB.length;
            virtualDB.push(data);
        } else {
            virtualDB[data._id] = data;
        }
    }

    static getData(id: number) {
        return virtualDB[id] || false;
    }

    static deleteData(id: number) {
        delete virtualDB[id];
    }

    static generateSampleData(): EntityData {
        return sampleData;
    }

}
