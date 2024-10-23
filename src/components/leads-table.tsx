import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const leads = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
    status: "New",
    company: "Acme Corp",
    createdAt: "2024-10-01",
    lastContacted: "2024-10-10",
    dealValue: "$10,000",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "555-234-5678",
    status: "Contacted",
    company: "Globex",
    createdAt: "2024-09-15",
    lastContacted: "2024-10-05",
    dealValue: "$15,000",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.j@example.com",
    phone: "555-345-6789",
    status: "Qualified",
    company: "Initech",
    createdAt: "2024-08-20",
    lastContacted: "2024-09-25",
    dealValue: "$8,000",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    phone: "555-456-7890",
    status: "Proposal Sent",
    company: "Umbrella Corp",
    createdAt: "2024-07-30",
    lastContacted: "2024-08-10",
    dealValue: "$12,500",
  },
  {
    id: 5,
    name: "Chris Green",
    email: "chris.green@example.com",
    phone: "555-567-8901",
    status: "Closed Won",
    company: "Wayne Enterprises",
    createdAt: "2024-06-10",
    lastContacted: "2024-07-01",
    dealValue: "$20,000",
  },
  {
    id: 6,
    name: "Linda White",
    email: "linda.white@example.com",
    phone: "555-678-9012",
    status: "New",
    company: "Stark Industries",
    createdAt: "2024-10-11",
    lastContacted: "2024-10-13",
    dealValue: "$5,000",
  },
  {
    id: 7,
    name: "David Clark",
    email: "david.clark@example.com",
    phone: "555-789-0123",
    status: "Contacted",
    company: "Oscorp",
    createdAt: "2024-09-20",
    lastContacted: "2024-09-25",
    dealValue: "$7,500",
  },
  {
    id: 8,
    name: "Sophia Martinez",
    email: "sophia.m@example.com",
    phone: "555-890-1234",
    status: "Qualified",
    company: "Cyberdyne Systems",
    createdAt: "2024-08-10",
    lastContacted: "2024-08-20",
    dealValue: "$11,000",
  },
  {
    id: 9,
    name: "James Wilson",
    email: "james.wilson@example.com",
    phone: "555-901-2345",
    status: "Proposal Sent",
    company: "Hooli",
    createdAt: "2024-07-05",
    lastContacted: "2024-07-15",
    dealValue: "$13,000",
  },
  {
    id: 10,
    name: "Olivia Taylor",
    email: "olivia.taylor@example.com",
    phone: "555-012-3456",
    status: "Closed Lost",
    company: "Pied Piper",
    createdAt: "2024-06-20",
    lastContacted: "2024-07-01",
    dealValue: "$9,500",
  },
  {
    id: 11,
    name: "William Harris",
    email: "william.h@example.com",
    phone: "555-234-5678",
    status: "New",
    company: "Tyrell Corp",
    createdAt: "2024-10-05",
    lastContacted: "2024-10-08",
    dealValue: "$6,000",
  },
  {
    id: 12,
    name: "Ava King",
    email: "ava.king@example.com",
    phone: "555-345-6789",
    status: "Contacted",
    company: "Blue Sun Corporation",
    createdAt: "2024-09-01",
    lastContacted: "2024-09-10",
    dealValue: "$18,000",
  },
  {
    id: 13,
    name: "Alexander Scott",
    email: "alex.scott@example.com",
    phone: "555-456-7890",
    status: "Qualified",
    company: "Black Mesa",
    createdAt: "2024-08-15",
    lastContacted: "2024-09-01",
    dealValue: "$14,000",
  },
  {
    id: 14,
    name: "Mia Edwards",
    email: "mia.edwards@example.com",
    phone: "555-567-8901",
    status: "Proposal Sent",
    company: "Nakatomi Corp",
    createdAt: "2024-07-10",
    lastContacted: "2024-07-20",
    dealValue: "$22,500",
  },
  {
    id: 15,
    name: "Daniel Turner",
    email: "daniel.turner@example.com",
    phone: "555-678-9012",
    status: "Closed Won",
    company: "Shinra Electric",
    createdAt: "2024-06-01",
    lastContacted: "2024-06-20",
    dealValue: "$25,000",
  },
  {
    id: 16,
    name: "Emma Watson",
    email: "emma.watson@example.com",
    phone: "555-789-0123",
    status: "Closed Lost",
    company: "Bluth Company",
    createdAt: "2024-09-12",
    lastContacted: "2024-09-20",
    dealValue: "$9,000",
  },
  {
    id: 17,
    name: "Lucas Brown",
    email: "lucas.brown@example.com",
    phone: "555-890-1234",
    status: "New",
    company: "Soylent Corp",
    createdAt: "2024-10-15",
    lastContacted: "2024-10-18",
    dealValue: "$4,500",
  },
  {
    id: 18,
    name: "Isabella Young",
    email: "isabella.young@example.com",
    phone: "555-901-2345",
    status: "Contacted",
    company: "Cyberdyne Systems",
    createdAt: "2024-08-25",
    lastContacted: "2024-09-10",
    dealValue: "$8,500",
  },
  {
    id: 19,
    name: "Ethan Wright",
    email: "ethan.wright@example.com",
    phone: "555-012-3456",
    status: "Qualified",
    company: "Wonka Industries",
    createdAt: "2024-09-05",
    lastContacted: "2024-09-18",
    dealValue: "$10,500",
  },
  {
    id: 20,
    name: "Amelia Lee",
    email: "amelia.lee@example.com",
    phone: "555-234-5678",
    status: "Proposal Sent",
    company: "Aperture Science",
    createdAt: "2024-07-25",
    lastContacted: "2024-08-05",
    dealValue: "$21,000",
  },
];

export default function LeadTable() {
  return (
    <div className="col-span-4">
      <Table className="rounded-sm">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.name}>
              <TableCell className="font-medium">{lead.name}</TableCell>
              <TableCell>{lead.company}</TableCell>
              <TableCell>{lead.email}</TableCell>
              <TableCell>{lead.status}</TableCell>
              <TableCell className="text-right">{lead.dealValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">
              {"$" +
                leads.reduce((total, lead) => {
                  // Convert dealValue from "$10,000" format to a number
                  const dealValueNumber = Number(
                    lead.dealValue.replace(/[$,]/g, "")
                  );
                  return total + dealValueNumber;
                }, 0)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
