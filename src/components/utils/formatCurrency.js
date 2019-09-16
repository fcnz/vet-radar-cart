export default function formatCurrency(ammount) {
  if (!ammount || isNaN(ammount)) return '$–'

  // Round to two decimal places
  const roundedAmmount = Number(ammount).toFixed(2)

  // Add commas after every third digit and prefix a dollar sign.
  // Regex - capture every digit followed by three more consectutive digits.
  // Replace the first captured digit with itself, followed by a comma.
  return '$' + roundedAmmount
    .toString()
    .replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      '$1,'
    )
}
