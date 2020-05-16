try {
    console.log('异常之前');
    throw new Error("制造异常");
    console.log('异常之后');
} catch (error) {
    console.log('捕获异常，\r\nerror:' + error);
} finally {
    console.log('最终');
}