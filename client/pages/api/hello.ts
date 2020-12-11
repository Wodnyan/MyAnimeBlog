console.log("what")
export default (_: any, res: any) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
