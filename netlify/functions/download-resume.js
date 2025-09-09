exports.handler = async function () {
  return {
    statusCode: 302,
    headers: { Location: '/resume.pdf' },
    body: '',
  };
};

