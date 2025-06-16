import axios from "axios";
import { useEffect, useState } from "react";

const ueGetCompany = () => {
  const [CompanyData, setCompanyData] = useState<any>({});

  useEffect(() => {
    const fetchedData = async () => {
      const response = await axios.get(`http://localhost:8000/get-companies`);
      setCompanyData(response.data);
    };
    fetchedData();
  }, []);

  const counts: any = {};
  CompanyData?.result?.forEach((el: any) => {
    if (counts[el.Month]) {
      counts[el.Month] += 1;
    } else {
      counts[el.Month] = 1;
    }
  });

  const dataset = Object.entries(counts).map(([month, count]) => ({
    month,
    count: Number(count),
  }));

  return { CompanyData, dataset };
};

export default ueGetCompany;
