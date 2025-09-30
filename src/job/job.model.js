// Modelo Job
export default class Job {
  constructor(
    id,
    title,
    description,
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
    this.description = description;
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
