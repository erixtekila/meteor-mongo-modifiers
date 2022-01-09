import { LinksCollection } from "./links";
import { check } from "meteor/check";

Meteor.methods({
    'link.add'(title) {
      check(title, String);
  
      if (!this.userId) {
        throw new Meteor.Error('Not authorized.');
      }
  
      return LinksCollection.insert({title, url:'http://g.fr', createdAt: new Date()});
    }
    ,'link.addTags'(_id, tags) {
      check( _id, String );
      check( tags, Array );
  
      if (!this.userId) {
        throw new Meteor.Error('Not authorized.');
      }
      
      return LinksCollection.update( { _id }, {$addToSet : { tags : { $each : tags } }} );
    }
    ,'link.removeTags'(_id, tags) {
      check( _id, String );
      check( tags, Array );
  
      if (!this.userId) {
        throw new Meteor.Error('Not authorized.');
      }
      
      return LinksCollection.update( { _id }, { $pullAll : { tags }} );
    }
});