import Image from "next/image";
import profilePic from "../public/me.jpg";
import styles from "../styles/EOM.module.css";
import { Toolbar } from "../components/toolbar";

export const EOM = ({ employee }) => {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee of the month</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>Kevin Tomas</h3>
          <h6>Student</h6>
          <Image src={profilePic} alt="my pic" className={styles.image}/>
          <p>A passionate programmer who is looking for a new position as a working student</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/kevintomas1995/react_next_news/employeeOfTheMonth"
  );

  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;
