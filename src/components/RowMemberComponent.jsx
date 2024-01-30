import { convertDateToIndoFormat } from "@/services/helper";

export default function RowMemberComponent({ data, index }) {
  return (
    <tr>
      <th scope="row" className="text-center">
        {index}
      </th>
      <td className="text-center">{data.nim}</td>
      <td>{data.nowa}</td>
      <td>{data.nama}</td>
      <td>{data.bidang}</td>
      <td className="text-justify">{data.harapan}</td>
      <td className="text-center">
        {convertDateToIndoFormat(data.created_at)}
      </td>
    </tr>
  );
}
