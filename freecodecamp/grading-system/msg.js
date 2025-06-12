function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores);
    let grade = getGrade(studentScore);
  
    return `Class average: ${average}. Your grade: ${grade}. You ${
      hasPassingGrade(studentScore) ? "passed" : "failed"
    } the course.`;
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));