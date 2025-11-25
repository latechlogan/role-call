import "./Table.css";

export default function Table({ data }) {
  return (
    <table>
      <thead>
        <th>HTML Element</th>
        <th>Implicit ARIA Semantics</th>
        <th>ARIA Role, State, and Property Allowances</th>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td>
              <code>{item.element}</code> {item.withConditions}
            </td>
            <td>{item.implicitRole}</td>
            <td>
              <p>{item.allowedRoles}</p>
              <p>{item.ariaAttributes}</p>
              <p>{item.notes}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const formatElementWithConditions = (element, withConditions) => {
  // no conditions, just wrap the element
  if (!withConditions) {
    return <code>{element}</code>;
  }

  // regex to match "with/without " and capture what comes after
  //   const match = withConditions.match(/^(with|without)\s+(.+)$/);

  //   if (match) {
  //     const [, withOrWithout, conditions] = match;
  //     return (
  //       <>
  //         <code>{element}</code> {withOrWithout} <code>{conditions}</code>
  //       </>
  //     );
  //   }

  // fallback in case the expected format doesn't match
  return (
    <>
      <code>{element}</code> {withConditions}
    </>
  );
};
