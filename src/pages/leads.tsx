import CardRow from "@/components/card-row";
import LeadTable from "@/components/leads-table";
import NavTitle from "@/components/nav-title";

export default function Leads() {
  return (
    <>
    <NavTitle currentLocation="Leads" />
    <CardRow/>
    <LeadTable/>
  </>
  )
}

