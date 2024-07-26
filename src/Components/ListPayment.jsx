import { CardPayment } from "./CardPayment"

export const ListPayment = () => {
  return (
    <section>
        <h1>Payment List</h1>
        <CardPayment titulo='Internet' />
        <CardPayment titulo='Electricity' />
        <CardPayment titulo='Voucher' />
        <CardPayment titulo='Internet' />
    </section>
  )
}
