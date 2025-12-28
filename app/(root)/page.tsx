import Hello from "../../components/hello";

export default function Layout() {
  console.log("I am a server compoent");
  return (
    <div>
      Layout
      <Hello />
    </div>
  );
};

// export default Layout;
