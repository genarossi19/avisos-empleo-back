// DTOs para Job

export function JobListDTO(job) {
  return {
    id: job.id,
    title: job.title,
    minSalary: job.minSalary,
    maxSalary: job.maxSalary,
    companyId: job.companyId,
    idLocation: job.idLocation,
    publishedDate: job.publishedDate,
    applicants: job.applicants,
  };
}

export function JobDetailDTO(job) {
  return {
    ...JobListDTO(job),
    description: job.description,
    idContractType: job.idContractType,
    workMode: job.workMode,
    experiencie: job.experiencie,
  };
}
