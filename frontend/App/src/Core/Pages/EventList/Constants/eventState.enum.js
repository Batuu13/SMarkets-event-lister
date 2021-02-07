export const EventStatesEnum = {
  new: "new",
  upcoming: "upcoming",
  live: "live",
};
export const EventStateList = Object.keys(EventStatesEnum).map((key) => {
  return { value: key, label: EventStatesEnum[key] };
});
