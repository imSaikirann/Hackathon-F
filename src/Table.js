import React from 'react'

export default function Table({data}) {
  return (
    <div>
      <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Nickname</th>
                <th>Rollnmber</th>
            </tr>
            {data.map((d)=>(
                <tr>
                    <td>{d.name}</td>
                    <td>{d.nickname}</td>
                    <td>{d.rollnumber}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
