// DTOs para Job - shapes aligned with frontend types

export function JobListDTO(job, companies, localidades, contractTypes) {
  const company = companies.find((c) => c.id === job.companyId);
  const localidad = localidades.find((l) => l.id === job.idLocation);
  const contractType = contractTypes.find((tc) => tc.id === job.idContractType);

  const companyMinimal = company
    ? { id: company.id, name: company.name, imgUrl: company.imgUrl }
    : null;
  const localityGeneric = localidad
    ? { id: localidad.id, name: localidad.localityName }
    : undefined;
  const contractTypeGeneric = contractType
    ? { id: contractType.id, name: contractType.name }
    : undefined;

  // ✅ Calcular featured
  const published = new Date(job.publishedDate);
  const today = new Date();
  const diffDays = Math.floor((today - published) / (1000 * 60 * 60 * 24));
  const featured = diffDays <= 10;

  return {
    id: job.id,
    title: job.title,
    minSalary: job.minSalary,
    maxSalary: job.maxSalary,
    locality: localityGeneric,
    publishedDate: job.publishedDate,
    applicants: job.applicants,
    shortDescription: job.shortDescription,
    contractType: contractTypeGeneric,
    workMode: job.workMode,
    experiencie: job.experiencie,
    company: companyMinimal,
    featured,
  };
}

export function JobDetailDTO(job, companies, localidades, contractTypes) {
  const company = companies.find((c) => c.id === job.companyId);
  const localidad = localidades.find((l) => l.id === job.idLocation);
  const contractType = contractTypes.find((tc) => tc.id === job.idContractType);

  const companyFull = company || null;
  const localityFull = localidad || null;
  const contractTypeFull = contractType || undefined;

  return {
    id: job.id,
    title: job.title,
    minSalary: job.minSalary,
    maxSalary: job.maxSalary,
    locality: localityFull,
    publishedDate: job.publishedDate,
    applicants: job.applicants,
    shortDescription: job.shortDescription,
    contractType: contractTypeFull,
    workMode: job.workMode,
    experiencie: job.experiencie,
    company: companyFull,
    longDescription: job.longDescription,
  };
}
