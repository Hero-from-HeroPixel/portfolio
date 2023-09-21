import { AllDocumentTypes } from '@/prismicio-types';
import { Content, ContentRelationshipField, isFilled } from '@prismicio/client';
import { prismicClient } from '../lib/clients';

export async function fetchContentRelationship(
	field: ContentRelationshipField<AllDocumentTypes>,
	type:
		| 'credits'
		| 'design_skills'
		| 'education_entry'
		| 'footer'
		| 'hero_introduction'
		| 'home_page'
		| 'job'
		| 'navigation'
		| 'other_skills'
		| 'project'
		| 'settings'
		| 'skill'
		| 'skills_list'
		| 'tech_skills',
) {
	if (isFilled.contentRelationship(field) && field.uid) {
		return await prismicClient.getByUID(type, field.uid);
	}
}
