

const GET = async (req) => {
  const {headers} = req

  const model = headers.get('model'),
  entry = headers.get('entry')

  const id = entry.slug || entry.id

  const paths = {

  }
 
  if (token !== process.env.REVALIDATE_TOKEN) {
    revalidatePath(paths[model])
    
    console.log('-  revalidatePath   -', revalidatePath)
    
    return Response.json({ revalidated: true, now: Date.now() })
  }
 
  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: 'Invalid token',
  })  
}

export {GET}