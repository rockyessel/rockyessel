export const SendContactForm = async (data: any) => {
  try {
    await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const AddViewCount = async (_id: string) => {
  try {
    const res = await fetch('/api/add-view-count', {
      method: 'POST',
      body: JSON.stringify({ _id }),
    });
    const data = await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const AddComment = async (commentObj: any) => {
  try {
    const res = await fetch('/api/add-comment', {
      method: 'POST',
      body: JSON.stringify(commentObj),
    });

    const data = await res.json();
  } catch (error) {
    console.log(error);
  }
};
