"use client"

import styles from "./index.module.css"

export default function MasulHodimPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mas’ul xodim</h1>
      <p className={styles.subtitle}>Saytga ma’lumotlarni joylash bo‘yicha mas’ul</p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>№</th>
            <th>F.I.SH</th>
            <th>Lavozimi</th>
            <th>Telefon raqami</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nazirov Doniyor Xolmurot o'g'li</td>
            <td>Axborot xizmati bosh mutaxassisi</td>
            <td>+99890 937 34 04</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>2</td>
            <td>Abdullayev Murodjon Shamsiddin o'g'li</td>
            <td>Matbuot xizmati rahbari</td>
            <td>+998 50 998 99 80</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
