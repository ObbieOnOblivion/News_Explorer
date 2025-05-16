// // src/components/HomePage.jsx
// import styles from "./HomePage.module.css";

// export default function HomePage() {
//   return (
//     <div className={styles.homeContainer}>
//       <h1 className={styles.homeTitle}>let’s build</h1>
//     </div>
//   );
// }


export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <h1
        style={{
          fontSize: "3.75rem", /* 6xl = 3.75rem (60px) */
          fontWeight: 700, /* bold */
          color: "rgba(0, 0, 0, 0.2)", /* text-black/20 */
          letterSpacing: "0.1em", /* tracking-widest */
        }}
      >
        let’s build
      </h1>
    </div>
  );
}

