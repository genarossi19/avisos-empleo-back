// Modelo Company
export default class Company {
  constructor(id, name, email, companyDescription, createdAt, imgUrl) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.companyDescription = companyDescription;
    this.createdAt = createdAt;
    this.imgUrl = imgUrl;
  }
}
