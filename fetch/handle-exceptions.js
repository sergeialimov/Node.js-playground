const handleException = async () => {
  try {
    const response = await fetch('https://domain.invalid');
  } catch (err) {
    console.log('Failed fetch: ', err)
  }
}

handleException()