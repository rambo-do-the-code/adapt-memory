import ComponentView from 'core/js/views/componentView';

class MemoryView extends ComponentView {
  preRender() {
    this.setActiveItem = (...args) => this.model.setActiveItem(...args);
    this.setVisitedItems = (...args) => this.model.setVisitedItems(...args);
    this.resetActiveItems = () => this.model.resetActiveItems();
  }

  postRender() {
    this.setReadyStatus();
    this.startTime = new Date().getTime();

    this.cards = $('.memory-item');
    this.totalPairs = $('.memory-item').length;
    this.pairsFound = 0;

    this.timeEscaped = 0;
    this.clickCount = 0;
  }
  flipCard(event) {
    this.clickCount++;
    var $card = $(event.target).closest('.memory-item');
    this.setScore();
  }

  setScore(){
    //without generate overhead <= check after dom.
    requestAnimationFrame(() => {
      const disabledCards = $('.memory-item.is-disabled');
      this.pairsFound = disabledCards.length;
      if(this.pairsFound === this.totalPairs){
        this.timeEscaped = new Date().getTime() - this.startTime;
        const scoreObj = {
          timeEscaped: this.timeEscaped,
          totalPairs: this.totalPairs,
          clickCount: this.clickCount,
        };
        this.model.set('_score', scoreObj);
        this.model.trigger('score', scoreObj.timeEscaped);
        this.model.set('minScore',scoreObj.totalPairs);
        this.model.set('maxScore',scoreObj.clickCount);
        console.log(scoreObj,this.model)
      }
    });
  }
}

MemoryView.template = 'memory.jsx';

export default MemoryView;
