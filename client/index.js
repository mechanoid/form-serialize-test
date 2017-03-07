const searchParamsFromFormData = (data) => {
  const searchParams = new URLSearchParams()
  data.forEach((val, key) => searchParams.append(key, val))
  return searchParams.toString()
}

const serialize = (form, options = {}) => {
  console.log('1. parse form data')
  const data = new FormData(form)
  const action = new URL(form.action)


  console.log('1. 1/2. for GET forms, replace URI search part with url encoded form data ')
  action.search = form.method === 'get' ? searchParamsFromFormData(data).toString() : action.search

  console.log(`2. send form to server as ${form.method} request`)
  const fetchOptions = Object.assign({}, options, {
    method: form.method,
    body: form.method === 'post' ? data : undefined
  })

  return fetch(action.toString(), fetchOptions)
}

const forms = document.querySelectorAll('form')

forms.forEach(form => serialize(form)
  .then(content => content.json())
  .then(doc => {
    console.log("3. response data result")
    console.log(doc)
  }))
