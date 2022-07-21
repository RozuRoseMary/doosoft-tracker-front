export const combineArr = (arr1, arr2) => {
  if (arr1?.length > 0) {
    return arr1?.concat(arr2);
  } else return arr2?.concat(arr1);
};

export const groupByDate = (array) => {
  if (array) {
    const groupByDateObj = array.reduce((group, tracker) => {
      const date = new Date(tracker.date).toISOString().slice(0, 10);

      if (!group[date]) {
        group[date] = [];
      }
      group[date].push(tracker);
      return group;
    }, {});

    const groupByDateArr = Object.keys(groupByDateObj).map((date) => {
      return { date, groupDate: groupByDateObj[date] };
    });

    return groupByDateArr;
  }
};

export const lastIndex = (arr, idx) => {
  const last = arr?.length - 1;

  if (idx === last) {
    return "none";
  }
};

export const colorType = (type) => {
  if (type === "INCOME") {
    return "green";
  } else return "red";
};
