import React from 'react'
import stylesCss from './styles.module.css'

function ItemLoto() {
  return (
    <table className={stylesCss['wrapper-item']} width="100%" cellSpacing={0} cellPadding={2}>
      <tbody>
        <tr>
          <td colSpan={3} className={stylesCss['loto-title']}>
            <strong>Khánh Hòa</strong>
          </td>
        </tr>
        <tr>
          <td>Chục</td>
          <td className={stylesCss['loto-center']}>
            Số
          </td>
          <td>Đơn Vị</td>
        </tr>
        <tr>
          <td>0</td>
          <td  className={stylesCss['loto-center']}>
            <strong>0</strong>
          </td>
          <td>0 6</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td  className={stylesCss['loto-center']}>
            <strong>1</strong>
          </td>
          <td>2 7 9</td>
        </tr>
        <tr>
          <td>1 5</td>
          <td  className={stylesCss['loto-center']}>
            <strong>2</strong>
          </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>3 9</td>
          <td  className={stylesCss['loto-center']}>
            <strong>3</strong>
          </td>
          <td>
            3 <span style={{ color: "#FF3322" }}>9</span>
          </td>
        </tr>
        <tr>
          <td>5 6 9</td>
          <td  className={stylesCss['loto-center']}>
            <strong>4</strong>
          </td>
          <td>5</td>
        </tr>
        <tr>
          <td>4 6 8</td>
          <td  className={stylesCss['loto-center']}>
            <strong>5</strong>
          </td>
          <td>2 4</td>
        </tr>
        <tr>
          <td>0 7</td>
          <td  className={stylesCss['loto-center']}>
            <strong>6</strong>
          </td>
          <td>4 5 9</td>
        </tr>
        <tr>
          <td>1 8</td>
          <td  className={stylesCss['loto-center']}>
            <strong>7</strong>
          </td>
          <td>6</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td  className={stylesCss['loto-center']}>
            <strong>8</strong>
          </td>
          <td>5 7</td>
        </tr>
        <tr>
          <td>
            1 <span style={{ color: "#FF3322" }}>3</span> 6
          </td>
          <td  className={stylesCss['loto-center']}>
            <strong>9</strong>
          </td>
          <td>3 4</td>
        </tr>
      </tbody>
    </table>
  )
}

export default ItemLoto