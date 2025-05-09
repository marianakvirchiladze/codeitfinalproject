import Image from "next/image";
import styles from "./page.module.css";
import SignOut from "@/components/SignOut/SignOut";

const Profile = async () => {
  let profile;
  try {
    const data = await fetch("https://dummyjson.com/users/1");
    profile = await data.json();

    if (profile.message) {
      throw Error(profile.message);
    }
  } catch (error) {
    throw Error(error);
  }

  return (
    <div className={styles.container}>
      <Image
        src={profile.image}
        className={styles.image}
        alt="Profile Image"
        width={100}
        height={100}
      />
      <section className={styles.section}>
        <div className={styles.infoWrapper}>
          <p>Name: </p>
          <p>{profile.firstName}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>MaidenName: </p>
          <p>{profile.maidenName}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>Lastname: </p>
          <p>{profile.lastName}</p>
        </div>
      </section>
      <SignOut />
    </div>
  );
};

export default Profile;