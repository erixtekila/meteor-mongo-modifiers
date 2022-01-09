import { Meteor } from 'meteor/meteor';
import { mockMethodCall } from 'meteor/quave:testing';
import { assert } from 'chai';
import { Random } from 'meteor/random';
import { LinksCollection } from "./links";
import "./method.link.add";

if (Meteor.isServer) {
  describe('Links', () => {
    describe('methods', () => 
    {
        const userId = Random.id();
        let id;
        const title = "pouet";
        beforeEach
        (
            () =>
            {
                id = mockMethodCall( "link.add", title,  { context: { userId } } );
            }
        );

        it
        (
            'should insert a new link'
            , () => {
                assert.equal( LinksCollection.findOne( id ).title, title );
            }
        );

        it
        (
            "should use collection.update with $addToSet modifier" 
            ,()=>
            {
                mockMethodCall( 'link.addTags', id, [ "riri", "fifi", "loulou" ], { context: { userId } }  );

                assert.isArray( LinksCollection.findOne( id ).tags );
            }
        );

        it
        (
            "should use collection.update with multiple call of $addToSet modifier" 
            ,()=>
            {
                mockMethodCall( 'link.addTags', id, [ "riri", "fifi", "loulou" ], { context: { userId } }  );
                mockMethodCall( 'link.addTags', id, [ "lala", "lulu", "riri" ], { context: { userId } }  );

                assert.deepEqual( LinksCollection.findOne( id ).tags, [ "riri", "fifi", "loulou", "lala", "lulu" ] );
            }
        );

        it
        (
            "should use collection.update with $pullAll modifier" 
            ,()=>
            {
                mockMethodCall( 'link.addTags', id, [ "riri", "fifi", "loulou" ], { context: { userId } } );
                mockMethodCall( 'link.removeTags', id, [ "riri" ], { context: { userId } } );

                assert.deepEqual( LinksCollection.findOne( id ).tags, [ "fifi", "loulou" ] );
            }
        );
    });
  });
}