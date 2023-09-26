const EuroFormatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });


export default function turnIntoEuro(number) {
  return EuroFormatter.format(number)
}