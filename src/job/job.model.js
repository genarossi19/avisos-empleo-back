// Modelo Job
export default class Job {
  constructor(
    id,
    title,
    shortDescription,
    longDescription,
    idLocation,
    idContractType,
    companyId,
    publishedDate,
    minSalary,
    maxSalary,
    workMode,
    experiencie,
    applicants
  ) {
    this.id = id;
    this.title = title;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.idLocation = idLocation;
    this.idContractType = idContractType;
    this.companyId = companyId;
    this.publishedDate = publishedDate;
    this.minSalary = minSalary;
    this.maxSalary = maxSalary;
    this.workMode = workMode;
    this.experiencie = experiencie;
    this.applicants = applicants;
  }
}
