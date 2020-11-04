export class Product {
    public title: string;
    public price: number;
    public description: string;
    public imgUrl: string;

    constructor(title: string, price: number, description: string, imgUrl: string)
    {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}
