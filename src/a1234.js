export default function A1234(props) {
  return (
    <div style={{ border: '2px solid #333', padding: '16px', margin: '16px 0' }}>
      <h2>用户名: {props.name}</h2>
      <p>年龄: {props.age}</p>
      <p>密码: {props.password}</p>
    </div>
  );
}