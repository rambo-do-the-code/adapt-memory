// import components from 'core/js/components';
// import MemoryView from './MemoryView';
// import MemoryModel from './MemoryModel';

// export default components.register('memory', {
//   model: MemoryModel,
//   view: MemoryView
// });

define(["core/js/adapt", "./MemoryView", "./MemoryModel"], function (
  Adapt,
  MemoryView,
  MemoryModel
) {
  return Adapt.register("memory", {
    view: MemoryView,
    model: MemoryModel,
  });
});

