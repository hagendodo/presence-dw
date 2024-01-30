import { convertDateToIndoFormat } from "@/services/helper";

export default function RowPresenceComponent({ data, index }) {
  return (
    <tr>
      <th scope="row" className="text-center">
        {index}
      </th>
      <td className="text-center">{data.nim}</td>
      <td>{data.name}</td>
      <td className="text-justify">{data.saran_masukan}</td>
      <td className="text-center">
        {convertDateToIndoFormat(data.created_at)}
      </td>
    </tr>
  );
}
