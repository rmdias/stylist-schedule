export interface orderData {
  stylist ?: string
  hasAppointment: boolean
  orderDetails: string
  phoneInfo:{
    code: string
    name: string
    number: string
  }
  timeSlot: {
    start: string
    date: string
  }
}